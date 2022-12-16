package com.example.itemsAPI.service;

import com.example.itemsAPI.repository.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    public Item save(Item item);

    public void delete(Integer id);

    public List<Item> all();

    public Optional<Item> findById(int itemId);
}
