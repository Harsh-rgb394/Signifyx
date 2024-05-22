import fileSaver from "file-saver"


export async function storeimage(id, photo) {
    fileSaver.saveAs(photo, `download-${id}.jpeg`);
}