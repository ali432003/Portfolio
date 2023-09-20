import React from 'react'

export default function CardMadebyme(props) {
  return (
    <div className="p-2 bg-slate-900 rounded-lg lg:my-5">
          <div className="p-2 bg-slate-900 rounded-lg">
            <img src={`/assets/${props.img}`} className="rounded-lg" alt="" />
          </div>
          <div className="flex my-4 justify-between text-slate-500">
            <h4 className="text-slate-300 ms-2">{props.title}</h4>
            <div className="lg:flex">
            <a href={props.live} target='_blank'><button className="button mx-4 lg:p-2 pe-10 rounded-lg text-slate-300 flex group">
                <img
                  src="/assets/link.svg"
                  className="ms-1 mr-3 my-auto filter grayscale brightness invert transition-transform transform group-hover:filter-none"
                  alt=""
                />
                Get live
              </button></a>

              <a href={props.code} target='_blank'><button className="button mx-4 lg:p-2 pe-10 rounded-lg text-slate-300 flex group">
                <img
                  src="/assets/code.svg"
                  className="ms-1 mr-3 my-auto  filter grayscale brightness invert transition-transform transform group-hover:filter-none"
                  alt=""
                />
                Get code
              </button></a>
            </div>
          </div>
        </div>
  )
}
