/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $(".logout").click(function(){
        $.ajax({
            method: 'GET',
            url: '../secure/service/logout.php',
            success: function(){
                sessionStorage.removeItem("session");
                _session();
            }
        });
    });
});