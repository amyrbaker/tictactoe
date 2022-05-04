class TicTacToe {
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', '']
        this.solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        this.boxes = document.querySelectorAll('.box')
        this.playing = true
        this.xCount = this.board.filter(e => e === 'X').length
        this.yCount = this.board.filter(e => e === 'O').length
        this.mark = this.xCount === this.yCount ? 'X' : 'O'
    }
    addListeners() {
        this.boxes.forEach(box => box.addEventListener('click', makeMove))
    }
    makeMove(event) {
        if (!event.target.innerHTML && playing) {
            event.target.innerHTML = this.mark
            this.board[event.target.id] = this.mark
        }
        checkWin()
    }
    checkWin() {
        this.solutions.forEach(arr => {
            if (this.board[arr[0]] === this.board[arr[1]] && this.board[arr[1]] === this.board[arr[2]] && this.board[arr[0]] !== '') {
                document.querySelector('#result').innerHTML = `Player ${this.mark} wins!`
                this.playing = !this.playing
            } else if (!this.board.includes('')) {
                document.querySelector('#result').innerHTML = 'It\'s a tie!'
                this.playing = !this.playing
            }
        })
    }
}
let game = new TicTacToe

// let board = ['', '', '', '', '', '', '', '', '']
// let solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// let boxes = document.querySelectorAll('.box')
// let playing = true
// boxes.forEach(box => box.addEventListener('click', () => {
//     // let xCount = board.filter(e => e === 'X').length
//     // let yCount = board.filter(e => e === 'O').length
//     // let mark = xCount === yCount ? 'X' : 'O'
//     // if (!box.innerHTML && playing) {
//     //     box.innerHTML = mark
//     //     board[box.id] = mark
//     // }
//     solutions.forEach(arr => {
//         if (board[arr[0]] === board[arr[1]] && board[arr[1]] === board[arr[2]] && board[arr[0]] !== '') {
//             document.querySelector('#result').innerHTML = `Player ${mark} wins!`
//             playing = !playing
//         } else if (!board.includes('')) {
//             document.querySelector('#result').innerHTML = 'It\'s a tie!'
//             playing = !playing
//         }
//     })
//     console.log(board)
// }))



