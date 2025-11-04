const ordersContainer = document.querySelector("#orders");


function createCard(arr) {
  let html;
  if (arr.length === 0) {
    ordersContainer.innerHTML = "<p>No Orders</p>";
  } else {
    arr.forEach((order) => {
      html = ` <div class="card-order">
          <p class="destacado">Order Nº: ${order.number.split("-")[4]}</p>
          <p>Status: ${order.status}</p>
          <p>Total: $${order.totalPrice}</p>
        </div>`;
      ordersContainer.innerHTML += html;
    });
  }
}
