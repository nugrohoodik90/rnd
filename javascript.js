function confirmHapus(){
  var agree = confirm("Apakah anda yakin untuk menghapus file ini?");
  if(agree == true){
    document.location.href='hapus.php?id=';
    return true
  }
  else{
    return false;
  }
}