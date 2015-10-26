<?php
namespace AppBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class Builder extends ContainerAware
{
    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');

        $menu->addChild('Main', array('route' => 'homepage'));
        $menu->addChild('Gallery', array());
        $menu->addChild('Author', array('route' => 'page_show',  'routeParameters' => array('slug' => 'author')));
        $menu->addChild('Publications', array('route' => 'publications'));

        // access services from the container!
        $em = $this->container->get('doctrine')->getManager();
        // findMostRecent and Blog are just imaginary examples
        $galleries = $em->getRepository('AppBundle:Gallery')->findAll();
        foreach ($galleries as $item)
        {
            if($item->getImages()->count() >0)
                $menu['Gallery']->addChild($item->getTitle(), array('route' => 'gallery_show',  'routeParameters' => array('slug' => $item->getSlug())));
        }

//        // create another menu item
//        $menu->addChild('About Me', array('route' => 'about'));
//        // you can also add sub level's to your menu's as follows
//        $menu['About Me']->addChild('Edit profile', array('route' => 'edit_profile'));

        // ... add more children

        return $menu;
    }
}