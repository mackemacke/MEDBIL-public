function initImageUpload(box) {
  let uploadField = box.querySelector('.contact-form-upload-input');
  let preview = box.querySelector('.contact-form-uploaded');
  let uploadLabelAfter = document.querySelector(
    '.contact-form-upload-options label'
  );
  let uploadLabelBefore = document.querySelector(
    '.contact-form-upload-options label'
  );

  uploadField.addEventListener('change', getFile);

  function getFile(e) {
    let file = e.currentTarget.files[0];
    checkType(file);
  }

  function checkType(file) {
    let imageType = /image.*/;
    if (!file.type.match(imageType)) {
      throw 'File is not an image!';
    } else if (!file) {
      throw 'No image is selected!';
    } else {
      previewImage(file);
    }
  }

  function previewImage(file) {
    let reader = new FileReader();

    reader.onload = function () {
      preview.style.backgroundImage = 'url(' + reader.result + ')';
      uploadLabelBefore.style.setProperty('--before-content', '""');
      uploadLabelAfter.style.setProperty('--after-content', '""');
    };
    reader.readAsDataURL(file);
  }
}

// initialize box-scope
var box = document.querySelector('.contact-form-upload');

initImageUpload(box);
