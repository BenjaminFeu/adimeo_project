<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$databases['default']['default'] = array (
  'database' => 'd8_project',
  'username' => 'root',
  'password' => 'core17labie',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

ini_set('display_errors', 1);
error_reporting(E_ALL);
