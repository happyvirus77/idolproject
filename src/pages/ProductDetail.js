import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from "../reduxComponents/cartSlice";
import style from "./ProductDetail.module.css";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const payment_items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedItem = products.find((t) => t.id.toString() === id);
  const pItem = payment_items.find((t) => t.id.toString() === id);

  const currentQuantity = pItem ? pItem.quantity : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (5 - currentQuantity === 0) {
      navigate(-1);
    } else {
      const item = { ...selectedItem, quantity: quantity };
      dispatch(addItem(item));
      navigate(-1);
    }
  };

  if (!selectedItem) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <form className={style.containers} onSubmit={handleSubmit}>
      <div className={style["imageInfo-section"]}>
        <div className={style["image-section"]}>
          <img
            src={`${process.env.PUBLIC_URL}/${selectedItem.image}`}
            alt={selectedItem.name}
          />
        </div>
        <div className={style["info-section"]}>
          <h1>{selectedItem.name}</h1>
          <div className={style["quantity-box"]}>
            <label className={style["quantity"]} htmlFor="quantity">
              수량
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className={style["addQuantity"]}
            >
              {[...Array(Math.min(5 - currentQuantity, 5)).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <p>
            {selectedItem.discount === 0 ? (
              <>
                <span className={style["stringPrice"]}>가격</span>
                <span className={style["price"]}>
                  {(selectedItem.price * quantity).toLocaleString()}
                </span>
              </>
            ) : (
              <>
                <span className={style["stringPrice"]}>가격</span>
                <span className={style["originPrice"]}>
                  {(selectedItem.price * quantity).toLocaleString()}
                </span>
                <span className={style["price"]}>
                  {(
                    (selectedItem.price -
                      selectedItem.price * selectedItem.discount) *
                    quantity
                  ).toLocaleString()}
                </span>{" "}
                원
              </>
            )}
          </p>
        </div>
      </div>
      <div className={style["button-section"]}>
        <button type="submit" className={style["add-button"]}>
          주문담기
        </button>
        <button
          type="button"
          className={style["cancel-button"]}
          onClick={() => navigate(-1)}
        >
          취소
        </button>
      </div>
    </form>
  );
}
