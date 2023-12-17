const formatDate = (timestamp, config = {}) =>{
    let { format = "DD/MM/YY", humanize = false } = config
    if (!timestamp) return "No Date specified"
    const date = new Date(timestamp)
    format = format.replace("DD", date.getDate())
    format = format.replace("MM", date.getMonth() + 1)
    format = format.replace("YY", date.getFullYear())
    if (humanize) {
        const today = formatDate(Date.now())
        if (today === format) return "Today"
    }
    return format
}
export default formatDate