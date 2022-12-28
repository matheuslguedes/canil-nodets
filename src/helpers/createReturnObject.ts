type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: menuOptions) =>{
    let objectMenu = {
        all: false,
        dog: false,
        cat: false,
        fish: false

    }
    if(activeMenu !== ''){
        objectMenu[activeMenu] = true;
    }
    return objectMenu
}