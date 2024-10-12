import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENT_API,
  environment: "master",
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: "projects" });
      const theProjects = resp.items.map((item) => {
        const { title, url, img, github, id, online } = item.fields;
        const imageUrl = img?.fields?.file?.url;
        return { id, title, imageUrl, url, github, online };
      });
      setProjects(theProjects);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
