// Function to generate a unique random ID for lists
// Generate random ID's for lists
const randomID = () => {
    return Math.floor(Date.now() * Math.random() * 100)
}

export { randomID }