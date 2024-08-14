import React from "react";

const Uslugi = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold">
        ДОБРО ПОЖАЛОВАТЬ В МИР НАШИХ УСЛУГ !
      </h1>
      <h1 className="text-white text-3xl font-bold">Услуги</h1>
      <div className="flex flex-col justify-center my-7">
        <h1 className="text-slate-500 text-lg font-bold ">
          «UES» - проложит путь к взгляду по новому, с общей перспективой, будет
          партнером в принятии
        </h1>
        <h1 className="text-slate-500 text-lg font-bold ">
          наилучшего решения и обеспечения мирового качества
        </h1>
      </div>
      <img
        className="w-[750px] h-[350px] rounded"
        src="https://ues-sert.uz/_next/image?url=%2Fimages%2Fblog%2Fblog-details-02.jpg&w=1920&q=75"
        alt=""
      />
    </div>
  );
};

export default Uslugi;
