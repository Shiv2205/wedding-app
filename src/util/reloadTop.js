

function reloadTop() {
    window.onbeforeunload =  () => {
        window.scrollTo(0,0);
    }
}



export default reloadTop;