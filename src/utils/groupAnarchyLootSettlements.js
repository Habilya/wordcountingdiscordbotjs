module.exports = (miningAnarchyLootSettlements = []) => {

    // create categories object to count category items
    let groupedAnarchySettlements = {};
    let lastUpdatedSettlements = {};
    miningAnarchyLootSettlements.forEach((miningAnarchyLootSettlementObject) => {
        if(groupedAnarchySettlements.hasOwnProperty(miningAnarchyLootSettlementObject.StarSystem)) {
            groupedAnarchySettlements[miningAnarchyLootSettlementObject.StarSystem]++;
        } else {
            groupedAnarchySettlements[miningAnarchyLootSettlementObject.StarSystem] = 1;
            lastUpdatedSettlements[miningAnarchyLootSettlementObject.StarSystem] = miningAnarchyLootSettlementObject.Updated;
        }
    });

    // convert object to array of objects (if this is really needed)
    return Object.keys(groupedAnarchySettlements).map((key) => {
        return { 'system': key, 'nbSettlements': groupedAnarchySettlements[key], 'lastUpdated': lastUpdatedSettlements[key] }
    });

};
