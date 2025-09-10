export default function FormatPKR(value) {

    const amount = Number(value);
    if (isNaN(amount)) return "Invalid amount";
    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR",
        minimumFractionDigits: 2,
    }).format(amount);

}