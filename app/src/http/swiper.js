import service from "./index";

export function getSwiper() {
  return service.get("/swiper");
}
export function getShopList(params) {
  return service.get("/getShopList", {
    params
  });
}

export function getRouters() {
  return service.get("/parameters")
}

export function postFilesImage(data) {
  return service.post("/filesImage", data)
}
