$(document).ready(function () {
  const galleryItems = $(".gallery-item");
  let currentIndex = 0;

  // Event listener for gallery item click
  galleryItems.on("click", function () {
    const imgSrc = $(this).find("img").attr("src");
    const description = $(this).find(".image-description").text();
    currentIndex = galleryItems.index(this);

    openPopup(imgSrc, description);
  });

  // Event listener for close button and background click
  $(".close-btn, .image-popup").on("click", function () {
    closePopup();
  });

  // Event listener for next button
  $(".next-btn").on("click", function () {
    showNextImage();
  });

  // Event listener for previous button
  $(".prev-btn").on("click", function () {
    showPrevImage();
  });

  // Keyboard navigation
  $(document).on("keydown", function (e) {
    switch (e.which) {
      case 37: // Left arrow key
        showPrevImage();
        break;
      case 39: // Right arrow key
        showNextImage();
        break;
      case 27: // Esc key
        closePopup();
        break;
    }
  });

  // Prevent closing popup when clicking on the content
  $(".popup-content").on("click", function (e) {
    e.stopPropagation();
  });

  // Event listener for overlay click
  $(".image-popup").on("click", function (e) {
    if (!$(e.target).closest(".popup-content").length) {
      closePopup();
    }
  });

  function openPopup(imgSrc, description = "") {
    $(".popup-img").attr("src", imgSrc);
    $("#popupDescription").text(description);
    $(".image-popup").fadeIn();
    $(".image-description-overlay").css("display", "contents");
    $("body").css("overflow", "hidden");
  }

  function closePopup() {
    $(".image-popup").fadeOut();
    $(".image-description-overlay").css("display", "none");
    $("body").css("overflow", "auto");
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showCurrentImage();
  }

  function showPrevImage() {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showCurrentImage();
  }

  function showCurrentImage() {
    const currentGalleryItem = galleryItems.eq(currentIndex);
    const imgSrc = currentGalleryItem.find("img").attr("src");
    const description = currentGalleryItem.find(".image-description").text();
    openPopup(imgSrc, description);
  }
});
