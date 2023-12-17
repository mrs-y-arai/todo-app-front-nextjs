"use server";
import { revalidateTag } from "next/cache";
import { postApiData } from "~/libs/api-helpers";

export const addTask = async (name: string) => {
  await postApiData({
    apiPath: "/tasks",
    data: {
      name,
      isCompleted: false,
    },
  });
  revalidateTag("tasks");
};
