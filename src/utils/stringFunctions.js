function stringIsNullOrEmpty(input) {
    if(typeof input !== "string") {
        return true;
    }

    if(typeof input === "string" && input.length === 0) {
        return true;
    } else if(input === null) {
        return true;
    } else {
        return false;
    }
}

exports.stringIsNullOrEmpty = stringIsNullOrEmpty;