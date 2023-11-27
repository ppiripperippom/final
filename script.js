document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileInfo = document.querySelector(".file-info");

    fileInput.addEventListener("change", function () {
        const fileName = this.files[0].name;
        fileInfo.innerHTML = `<p>선택된 파일: ${fileName}</p>`;
    });
});
// 팝업 열기
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// 팝업 닫기
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// 등록 확인 팝업 열기
function showConfirmation() {
    openPopup("confirmationPopup");
}

// 등록 실행 함수 (실제로 서버에 등록하는 부분을 추가해야 합니다)
function register() {
    // 등록 로직 추가
    alert("등록되었습니다.");
    // 팝업 닫기
    closePopup("confirmationPopup");
}