export const formatCurrency = (price) => {
  if (!price) return "";
  price = price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return price;
};
