// class Tictactoe {
//     constructor() {
//         this.winPoss = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
//         this.stillPlaying = true
//     }
//     addEvents() {
//         document.querySelectorAll('.box').forEach(el => el.addEventListener('click', e => {
//             Tictactoe.makeMark(e)
//         }))
//     }
//     makeMark(e) {

//     }
    
// }
// let game = new Tictactoe()

let board = ['', '', '', '', '', '', '', '', '']
let solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let boxes = document.querySelectorAll('.box')
let playing = true
boxes.forEach(box => box.addEventListener('click', () => {
    let xCount = board.filter(e => e === 'X').length
    let yCount = board.filter(e => e === 'O').length
    let mark = xCount === yCount ? 'X' : 'O'
    if (!box.innerHTML && playing) {
        box.innerHTML = mark
        board[box.id] = mark
    }
    solutions.forEach(arr => {
        if (board[arr[0]] === board[arr[1]] && board[arr[1]] === board[arr[2]] && board[arr[0]] !== '') {
            document.querySelector('#result').innerHTML = `Player ${mark} wins!`
            playing = !playing
        } else if (!board.includes('')) {
            document.querySelector('#result').innerHTML = 'It\'s a tie!'
            playing = !playing
        }
    })
    console.log(board)
}))



