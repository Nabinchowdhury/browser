let count = 0;

document.getElementById("plus-btn").addEventListener('click', function () {
    count++;
    const counter = localStorage.setItem('Count', count)
    // console.log((counter))

    render()

})




const render = () => {
    const rendered = localStorage.getItem('Count')
    console.log(rendered)

    document.getElementById('count-show').innerText = rendered;
    count = rendered




}
render()














