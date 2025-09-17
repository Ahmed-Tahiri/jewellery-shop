export const getDiscount = (price, discountPercentage) => {
    if (!discountPercentage) return price;
    return price - (price * (discountPercentage / 100));
};