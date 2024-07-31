"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  console.log(text);
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, dataForm) {
  const meal = {
    title: dataForm.get("title"),
    summary: dataForm.get("summary"),
    instructions: dataForm.get("instructions"),
    image: dataForm.get("image"),
    creator: dataForm.get("name"),
    creator_email: dataForm.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.contains("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}
