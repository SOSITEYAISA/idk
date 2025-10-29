import { NextResponse } from "next/server"

const quotes = [
  {
    text: "Единственный способ сделать великую работу - любить то, что ты делаешь",
    author: "Стив Джобс",
  },
  {
    text: "Жизнь - это то, что происходит, пока ты строишь другие планы",
    author: "Джон Леннон",
  },
  {
    text: "Будущее принадлежит тем, кто верит в красоту своих мечтаний",
    author: "Элеонора Рузвельт",
  },
  {
    text: "Успех - это способность идти от неудачи к неудаче, не теряя энтузиазма",
    author: "Уинстон Черчилль",
  },
  {
    text: "Не важно, как медленно ты идешь, главное - не останавливаться",
    author: "Конфуций",
  },
]

export async function GET() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return NextResponse.json(randomQuote)
}
