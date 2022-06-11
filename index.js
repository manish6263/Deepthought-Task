//Task description wrapping
var taskDesc = document.querySelectorAll('.task-desc');
var chevronDowns = document.querySelectorAll('.fa-chevron-down');
var sidebarBody = document.querySelector('.sidebar-body');
var bar = document.querySelector('.bar');
var sidebar = document.querySelector('.sidebar');

bar.addEventListener('click', function () {
    if (sidebar.classList.contains('w-25')) {
        sidebar.classList.remove('w-25');
        sidebar.classList.add('w-10');
        sidebarBody.innerHTML = `<div class="pt-3 d-flex justify-content-center">
        <button class="btn p-3 rounded-circle btn-outline-info">1</button>
        </div>`;
    }
    else {
        sidebar.classList.add('w-25');
        sidebar.classList.remove('w-10');
        sidebarBody.appendChild(h5);
        sidebarBody.appendChild(ulElement);
    }
});


chevronDowns.forEach(function (chevronDown) {
    chevronDown.addEventListener('click', function (e) {
        e.preventDefault();
        const assetDescription = e.currentTarget.previousElementSibling;
        if (assetDescription.classList.contains === 'd-none') {
            assetDescription.classList.remove('d-none');
        }
        else {
            assetDescription.classList.add('d-none');
        }
    });
})

const assetParent = document.querySelector('.asset-parent');
const projectName = document.querySelectorAll('.project-name');

//Task fetch function
const taskFetch = async function () {
    // const response = await fetch(
    //     'https://dev.deepthought.education/assets/uploads/files/others/project.json',
    //     {
    //         method: 'GET',
    //         mode: 'no-cors',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });

    const response = await fetch('some.json');
    const data = await response.json();
    projectName.forEach(project => {
        project.innerHTML = data.tasks[0].task_title;
    })
    // projectName.innerHTML = data.tasks[0].task_title;
    let assets = data.tasks[0].assets;

    //different task heading added to the sidebar
    ulElement = document.createElement('ul');
    ulElement.classList.add('text-center');
    ulElement.classList.add('task-items');


    //different task append to the parent element
    assets.forEach(asset => {
        const liElement = document.createElement('li');
        liElement.innerHTML = `<i class="fa-solid fa-arrow-right"></i> ${asset.asset_title}`;
        ulElement.appendChild(liElement);

        if (asset.asset_type === 'input_asset') {
            let inputChild = `
            <div class="bg-dark p-2 shadow asset-heading">
                <h5 class="text-white">${asset.asset_title}</h5>
            </div>
            <div class="shadow p-3 text-center asset-body">
                <textarea name="" id="" cols="30" rows="10" class="py-1 my-1 shadow"></textarea>
                <button class="btn py-1 btn-primary" style="margin-top: 20px;">Submit</button>
                <p class='py-1 task-desc'>${asset.asset_description}</p>
                <i class="fa-solid r-0 fa-chevron-down"></i>
            </div>`;
            const element = document.createElement('div');
            element.classList.add('col-12');
            element.classList.add('col-md-6');
            element.classList.add('p-3');
            element.innerHTML = inputChild;
            assetParent.appendChild(element);
        }

        else {
            if (asset.display_asset_docs !== '') {
                let inputChild = `
                <div class="bg-dark p-2 shadow asset-heading">
                    <h5 class="text-white">${asset.asset_title}</h5>
                </div>
                <div class="shadow p-3 text-center asset-body">
                    <iframe class="py-3" width="100%" height="500px"
                        src=${asset.display_asset_docs} frameborder="0">
                    </iframe>
                    <p class="py-1 task-desc">${asset.asset_description}</p>
                    <i class="fa-solid r-0 fa-chevron-down"></i>
                </div>`;
                const element = document.createElement('div');
                element.classList.add('col-12');
                element.classList.add('col-md-6');
                element.classList.add('p-3');
                element.innerHTML = inputChild;
                assetParent.appendChild(element);
            }
            else if (asset.display_asset_url !== '') {
                let inputChild = `
                <div class="bg-dark p-2 shadow asset-heading">
                    <h5 class="text-white">${asset.asset_title}</h5>
                </div>
                <div class="shadow p-3 text-center asset-body">
                    <iframe class="py-3" width="100%" height="500px"
                        src=${asset.display_asset_url} frameborder="0">
                    </iframe>
                    <p class="py-1 task-desc">${asset.asset_description}</p>
                    <i class="fa-solid r-0 fa-chevron-down"></i>
                </div>`;
                const element = document.createElement('div');
                element.classList.add('col-12');
                element.classList.add('col-md-6');
                element.classList.add('p-3');
                element.innerHTML = inputChild;
                assetParent.appendChild(element);
            }
            else if (asset.display_asset_image !== '') {
                let inputChild = `
                <div class="bg-dark p-2 shadow asset-heading">
                    <h5 class="text-white">${asset.asset_title}</h5>
                </div>
                <div class="shadow p-3 text-center asset-body" style="position: relative;">
                    <img src=${asset.display_asset_image} alt="images" width="100%">
                    <p class="py-1 task-desc">${asset.asset_description}</p>
                    <i class="fa-solid r-0 fa-chevron-down"></i>
                </div>`;
                const element = document.createElement('div');
                element.classList.add('col-12');
                element.classList.add('col-md-6');
                element.classList.add('p-3');
                element.innerHTML = inputChild;
                assetParent.appendChild(element);
            }
            else if (asset.display_asset_video !== '') {
                let inputChild = `
                <div class="bg-dark p-2 shadow asset-heading">
                    <h5 class="text-white">${asset.asset_title}</h5>
                </div>
                <div class="shadow p-3 text-center asset-body">
                    <iframe width="100%" height="300px" src=${asset.display_asset_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p class="py-1 task-desc">${asset.asset_description}</p>
                    <i class="fa-solid r-0 fa-chevron-down"></i>
                </div>`;
                const element = document.createElement('div');
                element.classList.add('col-12');
                element.classList.add('col-md-6');
                element.classList.add('p-3');
                element.innerHTML = inputChild;
                assetParent.appendChild(element);
            }
            else {
                let inputChild = `
                <div class="bg-dark p-2 shadow asset-heading">
                    <h5 class="text-white">${asset.asset_title}</h5>
                </div>
                <div class="shadow p-3 text-center asset-body">
                    <p class='py-1 task-desc'>${asset.asset_description}</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>`;
                const element = document.createElement('div');
                element.classList.add('col-12');
                element.classList.add('col-md-6');
                element.classList.add('p-3');
                element.innerHTML = inputChild;
                assetParent.appendChild(element);
            }
        }
    });
    h5 = document.createElement('h5');
    h5.classList.add('font-weight-bold', 'project-name');
    h5.innerHTML = `1. ${data.tasks[0].task_title}`;
    sidebarBody.appendChild(h5);
    sidebarBody.appendChild(ulElement);
}
var ulElement;
var h5;

taskFetch();