import { ItemDoacao } from "../../types/ItemDoacao";

export function sortItens(
  itens: ItemDoacao[],
  key: keyof ItemDoacao,
  order: "asc" | "desc" = "asc"
) {
  return itens.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (aValue instanceof Date && bValue instanceof Date) {
      return order === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    return 0;
  });
}
