import React from "react";
import "./ProfileComponent.scss";

export default function Profile() {
  return (
    <div className="main">
      <form className="profile">
        <div className="profile__top">
          <div className="profile__title">Profile Info</div>
        </div>

        <div className="profile__content">
          <img
            className="profile__image"
            src="https://res.cloudinary.com/teepublic/image/private/s--mKVtE5Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1544483374/production/designs/3703099_0.jpg"
          />

          <br />
          <br />

          <label for="groupEmail">Name: </label>
          <input
            // ref={register}
            className="creation__create-input text--semi-bold"
            name="email"
            type="email"
            placeholder="Enter Name"
          />

          <br />
          <br />

          <label for="password">Location:</label>
          <input
            // ref={register}
            id="password"
            className="creation__create-input text--semi-bold"
            name="password"
            type="password"
            placeholder="Enter Location"
          />
        </div>

        <div className="profile__bottom">
          <div className="profile__bottom--button">
            {/* <Button type="submit">Profile</Button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
