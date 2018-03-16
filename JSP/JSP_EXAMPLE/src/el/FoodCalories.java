package el;

import java.util.HashMap;
import java.util.Map;

public class FoodCalories {

		private Map<String, Integer> FoodMap = new HashMap<String, Integer>();
		
		public void setCalories(String name, Integer calories) {
			FoodMap.put(name, calories);
		}
		
		public int getCalories(String name) {
			return FoodMap.get(name);			
		}

}
