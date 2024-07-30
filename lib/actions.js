"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(dataForm) {
  const meal = {
    title: dataForm.get("title"),
    summary: dataForm.get("summary"),
    instructions: dataForm.get("instructions"),
    image: dataForm.get("image"),
    creator: dataForm.get("name"),
    creator_email: dataForm.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
