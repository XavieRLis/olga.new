<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('AppBundle::index.html.twig');
    }


    /**
     * @Route("/gallery/{slug}", name="gallery_show")
     */
    public function galleryShowAction($slug = '', Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $section = $em->getRepository('AppBundle:Gallery')->findOneBySlug($slug);
        return $this->render('AppBundle::gallery.html.twig', array('gallery' => $section));
    }

    /**
     * @Route("/publications", name="publications")
     */
    public function publicationsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $publications = $em->getRepository('AppBundle:Publish')->findAll();
        return $this->render('AppBundle::publications.html.twig', array('publications' => $publications));
    }
}
