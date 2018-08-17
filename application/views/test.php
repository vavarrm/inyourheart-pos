<HTML>
<HEAD>
    <TITLE>Receipt</TITLE>
</HEAD>

<?PHP
`mode com3: BAUD=9600 PARITY=N data=8 stop=1 xon=off`;
function serprnt($text2) {   //  open serial printer and write data to it
    $fp = fopen ("COM3:", "w+");
    if ($fp) {
        fputs ($fp, $text2);
        fclose ($fp);
    }
}
if (isset($_POST['title'])) {$title = $_POST['title'];} else {$title = NULL;}
if (isset($_POST['line1'])) {$line1 = $_POST['line1'];} else {$line1 = NULL;}
if (isset($_POST['line2'])) {$line2 = $_POST['line2'];} else {$line2 = NULL;}
if (isset($_POST['line3'])) {$line3 = $_POST['line3'];} else {$line3 = NULL;}
if (isset($title)) {
    serprnt(chr(0x1b).chr(0x40));  // init printer

    serprnt(chr(0x1b).chr(0x61).chr(0x1));    // center

    if(isset($_POST['logo'])) {
        include "rlogoflip.php";   // print logo
    }

    serprnt(chr(0x0a));

    serprnt(chr(0x12).$title.chr(0x0a));     // doublewide
    serprnt(chr(0x1b).chr(0x61).chr(0x0));   // end center
    serprnt(chr(0x0a));
    serprnt($line1.chr(0x0a));            //  chr(0x0a)   Line Feed  Prints one line from the buffer and feeds paper one line.
    serprnt($line2.chr(0x0a));
    serprnt($line3.chr(0x0a));
    serprnt(chr(0x0a));

    serprnt(chr(0x1d).chr(0x68).chr(80));  // barcode half height
    serprnt(chr(0x1d).chr(0x6b).chr(0x4).$line3.chr(0x00)); // barcode    bar 39

    serprnt(chr(0x14).chr(0x0f));     // advance paper
    serprnt(chr(0x19));   // chr(0x19)  Full Knife Cut

    if(isset($_POST['drawer'])) {
        serprnt(chr(0x1b).chr(0x70).chr(0x00).chr(0x1f).chr(0xef));    //  open cash drawer
    }
}

?>

<FORM name="receipt" method="post" action="<?php echo $_SERVER['PHP_SELF']?>">

    <input type="Text" name="title" size="22" value="TITLE" onfocus="this.select()" >  <br> <br>
    <input type="Text" name="line1" size="44" value="Line 1" onfocus="this.select()" > <br>
    <input type="Text" name="line2" size="44" value="Line 2" onfocus="this.select()" >  <br>
    <input type="Text" name="line3" size="44" value="0" onfocus="this.select()" > <br>
    <input type="checkbox" name="drawer" value="Yes">Open Cashdrawer<br>
    <input type="checkbox" name="logo" value="Yes">Print Logo<br>
    <input type="submit" value="print"> <br>

</form>
