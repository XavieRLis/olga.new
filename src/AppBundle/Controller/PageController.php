<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class PageController extends Controller
{


    /**
     * @Route("/{slug}", name="page_show")
     */
    public function showAction($slug = '', Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $section = $em->getRepository('AppBundle:Page')->findOneBySlug($slug);
        return $this->render('AppBundle::page.html.twig', array('entity' => $section));
    }


}
