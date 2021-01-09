import Swal from "sweetalert2";

const loading = () => {
  Swal.fire({
    title: "Loading",
    showConfirmButton: false,
    allowOutsideClick: false,
    timer: 10000,
    onOpen: () => {
      Swal.showLoading();
    },
  });
};
const close = () => {
  Swal.close();
};
const showError = (error) => {
  Swal.fire({
    title: "Error",
    icon: "error",
    text: error.message,
  });
  console.error(error);
};
/**
 * Hiện bảng cảnh báo
 * @param {String} confirmText
 * @returns {Promise<SweetAlertResult<Awaited<unknown>>>}
 */
const confirmSwal = (confirmText) => {
  return Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
  });
};

export default { loading, close, showError, confirmSwal };
