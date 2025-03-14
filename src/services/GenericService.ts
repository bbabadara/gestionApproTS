export interface CRUDService<T> {
    create(item: Omit<T, "id">): void;
    read(id: number): T | undefined;
    update(id: number, updatedItem: Partial<T>): boolean;
    delete(id: number): boolean;
    list(): T[];
  }
  
  export class GenericService<T extends { id: number }> implements CRUDService<T> {
    private items: T[] = [];
    private nextId: number = 1;
  
    create(item: Omit<T, "id">): void {
      const newItem = { id: this.nextId++, ...item } as T;
      this.items.push(newItem);
      console.log("Ajouté avec succès :", newItem);
    }
  
    read(id: number): T | undefined {
      return this.items.find(item => item.id === id);
    }
  
    update(id: number, updatedItem: Partial<T>): boolean {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items[index] = { ...this.items[index], ...updatedItem };
        console.log("Mis à jour :", this.items[index]);
        return true;
      }
      return false;
    }
  
    delete(id: number): boolean {
      const index = this.items.findIndex(item => item.id === id);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log("Supprimé avec succès.");
        return true;
      }
      return false;
    }
  
    list(): T[] {
      return this.items;
    }
  }
  