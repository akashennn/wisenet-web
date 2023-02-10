const intlNumberFormatValues = ["en-US", "currency", "LKR"];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
});