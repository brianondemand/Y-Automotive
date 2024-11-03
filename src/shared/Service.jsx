/* eslint-disable react-refresh/only-export-components */
const FormatResult = (resp) => {
    const result = {};
    const finalResult = [];

    resp.forEach((item) => {
        const listingId = item.carListing?.id; // Fix typo here
        if (listingId && !result[listingId]) {
            result[listingId] = {
                car: item.carListing,
                images: []
            };
        }

        if (item.carImages) {
            result[listingId].images.push(item.carImages);
        }
    });

    Object.values(result).forEach((item) => {
        finalResult.push({
            ...item.car,
            images: item.images
        });
    });

    return finalResult;
};

export default {
    FormatResult,
};
