package com.example.itemsAPI.service;

import com.example.itemsAPI.repository.ItemRepository;
import com.example.itemsAPI.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ItemServiceMySQL implements ItemService{
    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Item save(Item item) {
        return itemRepository.save(item);
    }

    public void delete(Integer id) {
        itemRepository.deleteById(id);
    }

    public List<Item> all()
    {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach( result::add );
        return result;
    }

    public Optional<Item> findById(int itemId) {
        return itemRepository.findById(itemId);
    }

}
