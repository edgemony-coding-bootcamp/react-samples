import { useState } from "react";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    props.searching(value);
  };

  return (
    <div class="navbar bg-neutral text-neutral-content mb-4">
      <div class="flex-1">
        <a
          href="https://edgemony-coding-bootcamp.github.io/react-samples/"
          class="btn btn-ghost normal-case text-xl"
        >
          React ecommerce
        </a>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered text-black"
            value={search}
            onChange={changing}
          />
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">{props.cart}</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">{props.cart} Items</span>
              <span class="text-info">Subtotal: {props.total}€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
