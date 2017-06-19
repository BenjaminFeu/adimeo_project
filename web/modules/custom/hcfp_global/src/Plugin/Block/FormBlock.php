<?php

namespace Drupal\hcfp_global\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'FormBlock' block.
 *
 * @Block(
 *  id = "form_block",
 *  admin_label = @Translation("Form block"),
 * )
 */
class FormBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $form =  \Drupal::formBuilder()->getForm('Drupal\hcfp_global\Form\DefaultForm');
    $build = [];
    $build['form_block']=$form;

    return $build;
  }

}
