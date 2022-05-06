window.onload = () => {
    // Select Node
    const targetNode = document.body;
    // Options
    const config = {
        attributes: true,
        subtree: true,
        childList: true,
        characterData: true,
    };

    // Callback function
    const callback = function (mutationList) {
        mutationList.forEach(function (mutation) {
            if (
                mutation.target &&
                mutation.target.innerText &&
                mutation.target.innerText.toLowerCase().indexOf("skip ad") != -1
            ) {
                mutation.target.click();
                console.log("Ad skipped...");
            }
        });
    };

    // Obsever Instance
    const observer = new MutationObserver(callback);

    // Start observing
    observer.observe(targetNode, config);
};
