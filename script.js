let data = [
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 1
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 2
        }
    },
    {
        title: 'Send leads documents for inpection ',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 3
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 4
        }
    },
    {
        title: 'Send leads documents for inpection',
        deadline: 'June 22 2021',
        author: {
            id: +Math.random().toString().slice(2, 10),
            img: 5
        }
    },
]

let elems = document.querySelector('.elems')
let body = document.body


    for (let item of data) {
        let block = document.createElement('div')

        let block_top = document.createElement('div')
        let deadline = document.createElement('div')
        let block_bottom = document.createElement('div')

        let top_left_text = document.createElement('div')
        let del = document.createElement('div')

        let deadline_text = document.createElement('h1')
        let time = document.createElement('span')

        let info = document.createElement('div')
        let day = document.createElement('div')

        let bg_img = document.createElement('img')
        let bottom_text = document.createElement('div')

        block.classList.add('block')

        block_top.classList.add('top')
        deadline.classList.add('deadline')
        block_bottom.classList.add('bottom')

        top_left_text.classList.add('top_left_text')
        top_left_text.innerHTML = item.title
        del.classList.add('delete')

        deadline_text.innerHTML = 'deadline: '
        time.classList.add('time')
        time.innerHTML = item.deadline

        info.classList.add('info')
        day.classList.add('day')
        day.innerHTML = 'June 22 2021'

        bg_img.classList.add('bg_img')
        bg_img.src = `./img/${item.author.img}.png`
        bottom_text.classList.add('bottom_text')
        bottom_text.innerHTML = `ID ${item.author.id}`

        elems.append(block)
        block.append(block_top, deadline, block_bottom)
        block_top.append(top_left_text, del)
        deadline.append(deadline_text, time)
        block_bottom.append(info, day)
        info.append(bg_img, bottom_text)


        del.onclick = () => {
            block.remove()
            console.log('del');
        }
    }



    
//     const reload = (arr) => {
//         elems.innerHTML = ''
    
// data = data.filter(elem => elem.id !== item.id)
// reload(data)
// }

// reload(data)

