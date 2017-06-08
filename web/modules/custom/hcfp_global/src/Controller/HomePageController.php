<?php

namespace Drupal\hcfp_global\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class HomePageController.
 *
 * @package Drupal\hcfp_global\Controller
 */
class HomePageController extends ControllerBase {

  /**
   * Index.
   *
   * @return string
   *   Return Hello string.
   */
  public function index() {
    return [
      '#type' => 'markup',
      '#markup' => '',
    ];
  }

}
