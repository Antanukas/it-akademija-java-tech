package lt.akademija.javatech.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import lt.akademija.javatech.model.NewProduct;
import lt.akademija.javatech.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final List<Product> products;
    private final AtomicLong idGenerator = new AtomicLong(0);

    public ProductController() {
        products = Collections.synchronizedList(new ArrayList<>());

        Product p1 = new Product();
        p1.id = idGenerator.incrementAndGet();
        p1.title = "Smasungiok";
        p1.image = "/samsung.jpg";
        p1.description = "Desc";
        p1.price = new BigDecimal("20.6");
        p1.quantity = 48L;
        products.add(p1);

        Product p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Smasungiok2";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);
    }

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return products;
    }

    @GetMapping("/api/products/{productId}")
    public Product getProduct(@PathVariable Long productId) {
        return products.stream()
                       .filter(p -> p.id.equals(productId))
                       .findFirst()
                       .orElseThrow(() -> new RuntimeException("Can't find product"));
    }

    @PostMapping("/api/products")
    public Product createProduct(@RequestBody NewProduct p) {
        Product pr = new Product();
        pr.id = idGenerator.incrementAndGet();
        pr.price = p.price;
        pr.image = p.image;
        pr.title = p.title;
        pr.description = p.description;
        pr.quantity = p.quantity;
        products.add(pr);
        return pr;
    }

    @PutMapping("/api/products/{productId}")
    public Product updateProduct(@PathVariable Long productId, @RequestBody NewProduct p) {
        Product existingProduct = getProduct(productId);
        existingProduct.title = p.title;
        existingProduct.quantity = p.quantity;
        existingProduct.description = p.description;
        existingProduct.price = p.price;
        existingProduct.image = p.image;
        return existingProduct;
    }
}
