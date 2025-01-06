import { Dropzone } from "dropzone";

Dropzone.autoDiscover = false;

var previewTemplate,
    dropzone,
    dropzonePreviewNode = document.querySelector("#dropzone-preview-list");
(dropzonePreviewNode.id = ""),
    dropzonePreviewNode &&
        ((previewTemplate = dropzonePreviewNode.parentNode.innerHTML),
        dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode),
        (dropzone = new Dropzone(".dropzone", {
            url: "https://httpbin.org/post",
            method: "post",
            previewTemplate: previewTemplate,
            previewsContainer: "#dropzone-preview",
        })));