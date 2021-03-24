export const showUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
        y:  0, 
        opacity: 1, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
}

export const sideMenu = {
    hidden: { 
        x: '110%',
        transition: { duration: 0.3, ease: 'easeOut' }
    },
    visible: {
        x: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
    }
}