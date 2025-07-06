"use client";
import { useParams } from "next/navigation";
import CenterBlock from "@components/CenterBlock/CenterBlock";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  return <CenterBlock header={`Треки ${id}`} />;
};

export default CategoryPage;
